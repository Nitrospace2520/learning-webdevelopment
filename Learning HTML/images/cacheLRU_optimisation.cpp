#include<iostream>
#include <unordered_set>
using namespace std;
class DNode         //? Doubly linked list
{
public:
    int data;
    DNode *next;
    DNode *prev;
    DNode(int data){
        this->data = data;
        this->prev = NULL;
        this->next = NULL ;
    }
};
class Node         //? Singly linked list
{
public:
    int data;
    Node *next;
    Node(int data){
        this->data = data;
        this->next = NULL ;
    }
};

Node *insertEnd(Node *head, int val){
    Node *temp = new Node(val);
    if(head == NULL){
        return temp;
    }
    Node *curr = head;
    while(curr->next != NULL){
        curr = curr->next;
    }
    curr->next = temp;
    return head;
}
void printList(Node *head){
    if(head == NULL){
        return;
    }else{
        Node *curr = head;
        while(curr != NULL){
            cout<<curr->data << "  ";
            curr = curr->next;
        }
        cout<<endl;
    }
}
Node *mergeTwoList(Node *a, Node *b){
    if (a == NULL)
    {
        return b;
    }
    if (b == NULL)
    {
        return a;
    }
    Node *head = NULL;
    Node *tail = NULL;
    if (a->data <= b->data)
    {
        tail = a;
        head = tail;
        a = a->next;
    }else{
        tail = b;
        head = tail;
        b = b->next;
    }
    while (a != NULL && b != NULL)
    {
        if (a->data <= b->data)
        {
            tail->next = a;
            tail = a;
            a = a->next;
        }else{
            tail->next = b;
            tail = b;
            b = b->next;
        }
    }
    if(b == NULL){
        tail->next = a;
    }else{
        tail->next = b;
    }
    return head;
}

int main(){
    Node *head1 = new Node(10);
    head1 = insertEnd(head1, 20);
    head1 = insertEnd(head1, 30);

    Node *head2 = new Node(15);
    head2 = insertEnd(head2, 25);
    head2 = insertEnd(head2, 35);

    Node *head = mergeTwoList(head1, head2);
    printList(head);
    
    return 0;
}
