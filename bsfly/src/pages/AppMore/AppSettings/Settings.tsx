import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonList,
    IonListHeader,
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import { hardwareChip, save } from 'ionicons/icons';
import { FC } from 'react';

const SettingsPage: FC = () => {

    return (
        <IonPage>
            <IonHeader class="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton default-href="/more"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Settings</IonTitle>
                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon icon={save} slot="icon-only" />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonListHeader>
                    <IonIcon icon={hardwareChip} style={{ marginRight: '8px' }} />
                    ESP32 Configuration
                </IonListHeader>
                <IonList inset={true}>
                    <IonItem>
                        <IonInput
                            label="ESP32 MAC Address"
                            labelPlacement="stacked"
                            placeholder="AA:BB:CC:DD:EE:FF"
                        />
                    </IonItem>
                    <IonItem lines="none">
                        <IonNote color="medium" style={{ fontSize: '12px' }}>
                            Enter the MAC address of your ESP32 device
                        </IonNote>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
}
export default SettingsPage;
