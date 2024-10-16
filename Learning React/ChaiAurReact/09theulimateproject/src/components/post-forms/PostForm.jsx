/* eslint-disable react/prop-types */
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Input, Button, RealTimeEditor, DropdownMenu } from "../index";
import appwriteService from "../../appwrite/configure";

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData); // TODO: you have to replace 'authorization' with 'user' probabily.

  const submit = async (data) => {
    if (post) {
      // console.log(data, file);

      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      // console.log(userData, data);

      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      if (file) {
        // console.log(file);
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      /* // Method: 01
      const slug = value.toLowerCase().replace(/ /g, "-");
      setValue("slug", slug);
      return slug; */
      // Method: 02
      return (
        value[0].toLowerCase() +
        value
          .trim()
          .toLowerCase()
          .replace(/^[a-zA-Z\d\s]/g, "-")
          .replace(/\s/g, "-")
          .substring(1)
      );
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    // NOTE: use for efficient memory management
    return () => subscription.unsubscribe();
  }, [watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title : "
          placeHolder="Enter a title for your post"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug : "
          placeHolder="Your slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RealTimeEditor
          label="Content : "
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image : "
          type="file"
          className="mb-4"
          accept="image/png, image/jepg, image/jpg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <DropdownMenu
          options={["active", "inactive"]}
          label="Status : "
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          label={post ? "Update" : "Submit"}
          type="submit"
          backGroundColor={post ? "bg-green-900" : undefined}
          className="w-full"
        />
      </div>
    </form>
  );
};

export default PostForm;
