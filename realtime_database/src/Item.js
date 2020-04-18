import React, { useState, useEffect} from 'react';
import {IonList, IonItem, IonLabel, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonIcon} from '@ionic/react';
import {document, trash} from 'ionicons/icons';
export default function Item({doEdit,doDelete, doc}) {
    let data = doc.data();

    return(
        <IonItemSliding>
            <IonItem>
                <IonLabel class = "ion-text-wrap">
                    <IonText className="item title">
                        <div>{data.name}</div>
                    </IonText>
                    <IonText className="item-sub-title">
                        <div>{data.createdOn} + ""}</div>
                    </IonText>
                    <IonText className="item-id">
                        {doc.id}
                        </IonText>
                </IonLabel>
                <div></div>
            </IonItem>
            <IonItemOptions>
                <IonItemOption onClick= {()=>  doEdit(doc.id)  }>
                <IonIcon slot ="icon-only" icon={document}></IonIcon>
                </IonItemOption>
                <IonItemOption color="danger" onClick= {()=> doDelete(doc.id)  }>
                    <IonIcon slot ="icon-only" icon={trash}></IonIcon>

                </IonItemOption>
                <IonItemOption>

                </IonItemOption>
            </IonItemOptions>
        
        </IonItemSliding>
    );
}
