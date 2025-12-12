import { FC } from "react";
import { IonButtons, IonChip, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRefresher, IonRefresherContent, IonRow, IonTitle, IonToolbar, RefresherCustomEvent } from "@ionic/react";
import CycleButton from "../../components/AppCycleSelector/CycleSelector";
import "./Sensor.css"
import { sensorsData } from "../../assets/assets";
import SensorCard from "../../components/AppSensor/Sensor";
import { optionsOutline } from "ionicons/icons";
import ControlModal from "../../components/AppSensor/Modal";
import { UserButton } from "@clerk/clerk-react";

const SensorPage: FC = () => {

    const handleRefresh = (event: RefresherCustomEvent) => {
        setTimeout(() => {
            event.detail.complete()
        }, 2000)
    }

    return (
        <>
            <IonPage>
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton id="open-control-modal">
                        <IonIcon icon={optionsOutline}></IonIcon>
                        <ControlModal></ControlModal>
                    </IonFabButton>
                </IonFab>
                <IonHeader>
                    <IonToolbar mode="ios">
                        <IonTitle>Sensors</IonTitle>
                        <IonButtons slot="start">
                            <CycleButton />
                        </IonButtons>
                        <IonButtons slot="end">
                            <IonItem lines="none">
                                <UserButton />
                            </IonItem>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>

                <IonContent fullscreen>
                    <IonRefresher slot="fixed" pullFactor={0.5} pullMin={100} pullMax={200} onIonRefresh={handleRefresh}>
                        <IonRefresherContent>
                        </IonRefresherContent>
                    </IonRefresher>

                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Sensors</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <IonGrid>
                        <IonRow class="ion-justify-content-center ion-align-items-center">
                            <IonChip className="good-chip">
                                <IonLabel>Good</IonLabel>
                            </IonChip>
                            <IonChip className="warning-chip">
                                <IonLabel>Warning</IonLabel>
                            </IonChip>
                            <IonChip className="danger-chip">
                                <IonLabel>Danger</IonLabel>
                            </IonChip>
                        </IonRow>
                        <IonRow class="ion-justify-content-center ion-align-items-center">
                            {sensorsData.map((sensor, index) => (
                                <IonCol key={index} size="12" sizeMd="6" sizeLg="4">
                                    <SensorCard
                                        key={index}
                                        title={sensor.name}
                                        value={sensor.value}
                                        unit={sensor.unit}
                                    ></SensorCard>
                                </IonCol>
                            ))}
                        </IonRow>
                    </IonGrid>

                </IonContent>
            </IonPage>
        </>
    )
}

export default SensorPage;
