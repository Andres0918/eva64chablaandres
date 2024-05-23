import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs, query } from '@angular/fire/firestore';
import { Message } from '../domain/message';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private firestore: Firestore) { }

  addMessage(message: Message){
    addDoc(collection(this.firestore, 'messages'), Object.assign({},message))
  }

  getMessages(){
    return getDocs(query(collection(this.firestore, 'messages')))
  }

  deleteMessage(message: Message){
    const messageDocRef = doc(this.firestore, 'messages/${message.id}')
    return deleteDoc (messageDocRef);
  }

}
