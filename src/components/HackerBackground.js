import React from 'react'
import '../styles/hack.css'

export default function HackerBackground() {
    // const content1500 = "const e=require(../models/book),s=require(fs);exports.createBook=(s,t,a)=>{if(!s.file)return t.status(400).json({message:Mettre une image});{const a=JSON.parse(s.body.book);delete a._id,delete a._userId;new e({...a,userId:s.auth.userId,imageUrl:`${s.protocol}://${s.get(host)}/images/${s.file.filename}`}).save().then((()=>{t.status(201).json({message:Objet enregistré !})})).catch((e=>{t.status(400).json({error:e})}))}},exports.getOneBook=(s,t,a)=>{e.findOne({_id:s.params.id}).then((e=>{t.status(200).json(e)})).catch((e=>t.status(404).json(e)))},exports.modifyBook=(t,a,o)=>{let n;n=t.file?1:0,console.log(n);const r=t.file?{...JSON.parse(t.body.book),imageUrl:`${t.protocol}://${t.get}/images/${t.file.filename}`}:{...t.body};delete r._userId,e.findOne({_id:t.params.id}).then((o=>{if(o.userId!=t.auth.userId)a.status(401).json({message:ot authorized});else{if(1==n){const e=o.imageUrl.split(/images/)[1];s.unlink(`images/${e}`,(e=>{e?console.log(e):console.log(Image supprimé)}))}else console.log(Pas dimage);e.updateOne({_id:t.params.id},{...r,_id:t.params.id}).then((()=>a.status(200).json({messageObjet modifié!}))).catch((e=>a.status(401).json({error:e})))}})).catch((e=>{a.status(400).json({error:e})}))},exports.deleteBook=(t,a,o)=>{e.findOne({_id:t.params.id}).then((o=>{if(o.userId!=t.auth.userId)a.status(401).json({message:Not authorized});else{const n=o.imageUrl.split(/images/)[1];s.unlink(`images/${n}`,(()=>{e.deleteOne({_id:t.params.id}).then((()=>{a.status(200).json({message:Ob"
    const content ="a.status(401).json({message:ot authorized});else{if(1==n){const e=o.imageUrl.split(/images/)[1];s.unlink(`images/${e}`,(e=>{e?console.log(e):console.log(Image supprimé)}))}else console.log(Pas dimage);e.updateOne({_id:t.params.id},{...r,_id:t.params.id}).then((()=>a.status(200).json({messageObjet modifié!}))).catch((e=>a.status(401).json({error:e})))}})).catch((e=>{a.status(400).json({error:e})}))},exports.deleteBook=(t,a,o)=>{e.findOne({_id:t.params.id}).then((o=>{if(o.userId!=t.auth.userId)a.status(401).json({message:Not authorized});else{const n=o.imageUrl.split(/images/)[1];s.unlink(`images/${n}`,(()=>{e.deleteOne({_id:t.params.id}).then((()=>{a.status(200).json({message:Ob"
    let x=0;
    console.log(content.substring(0,1));
    let array = [];
    while (x<680){
        let y = x++
        array.push(<div className='hackerContent'>{ content.substring(x,y)}</div> )
    }
    let arrayArray = <div className='textLine'>{array}</div>
    let arrayArray2= <div className='textLine2'>{array}</div>

  
    return (
        <div className='backGreen'>
            {arrayArray}
            {arrayArray2}
            {arrayArray}
            {arrayArray2}
            {arrayArray}
            {arrayArray2}
            {arrayArray}
            {arrayArray2}
            {arrayArray}
            {arrayArray2}
            {arrayArray}
            {arrayArray2}
            {arrayArray}
            {arrayArray2}
            {arrayArray}
            {arrayArray2}
            {arrayArray}
            {arrayArray2}
            {arrayArray}
            {arrayArray2}
            <div className='right'></div>
            <div className='left'></div>
        </div>
  )
}
