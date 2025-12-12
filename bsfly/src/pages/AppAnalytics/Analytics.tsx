import { IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRefresher, IonRefresherContent, IonRow, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonTitle, IonToolbar, RefresherCustomEvent } from '@ionic/react';
import { lifecycleThresholds } from '../../config/thresholds';
import { FC } from 'react';
import { useCycle } from '../../context/CycleContext';
import Graph from '../../components/AppGraph/Graphs';
import CycleButton from '../../components/AppCycleSelector/CycleSelector';
import { cloudOutline, thermometerOutline, waterOutline } from 'ionicons/icons';
import { UserButton } from '@clerk/clerk-react';

const AnalyticsPage: FC = () => {
    const { stage } = useCycle()
    const thresholds = lifecycleThresholds[stage]

    const sensorGraphs = [
        {
            id: "1",
            sensor: "Temperature",
            max: thresholds.temperature.max,
            min: thresholds.temperature.min,
            warn: thresholds.temperature.optimal[1],
            unit: "°C"
        },
        {
            id: "2",
            sensor: "Humidity",
            max: thresholds.humidity.max,
            min: thresholds.humidity.min,
            warn: thresholds.humidity.optimal[1],
            unit: "%"
        },
        {
            id: "3",
            sensor: "Substrate Moisture",
            max: thresholds.moisture.max,
            min: thresholds.moisture.min,
            warn: thresholds.moisture.optimal[1],
            unit: "%"
        }
    ]

    const handleRefresh = (event: RefresherCustomEvent) => {
        setTimeout(() => {
            // Any calls to load data go here
            event.detail.complete();
        }, 2000);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Analytics</IonTitle>
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
                        <IonTitle size="large">Analytics</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonSegment>
                                <IonSegmentButton value="Temperature" contentId='Temperature'>
                                    <IonIcon icon={thermometerOutline} />
                                    °C
                                </IonSegmentButton>
                                <IonSegmentButton value="Humidity" contentId='Humidity'>
                                    <IonIcon icon={cloudOutline} />
                                    RH%
                                </IonSegmentButton>
                                <IonSegmentButton value="Substrate Moisture" contentId='Substrate Moisture'>
                                    <IonIcon icon={waterOutline} />
                                    %
                                </IonSegmentButton>
                            </IonSegment>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonSegmentView>
                                {sensorGraphs.map((graph, index) => (
                                    <IonSegmentContent key={index} id={graph.sensor} >
                                        <Graph
                                            key={index}
                                            sensorType={graph.sensor}
                                            upperLimit={graph.max}
                                            lowerLimit={graph.min}
                                            warningLimit={graph.warn}
                                            unit={graph.unit}
                                        ></Graph>
                                        <IonRow class="ion-justify-content-center ion-align-items-center legends-row">
                                            <IonChip color="primary">{graph.sensor} {graph.unit}</IonChip>
                                            <IonChip color="danger">
                                                <IonLabel>Upper Limit: {graph.max} {graph.unit}</IonLabel>
                                            </IonChip>
                                            <IonChip color="warning">
                                                <IonLabel>Warning Limit: {graph.warn} {graph.unit}</IonLabel>
                                            </IonChip>
                                            <IonChip color="secondary">
                                                <IonLabel>Lower Limit: {graph.min} {graph.unit}</IonLabel>
                                            </IonChip>
                                        </IonRow>
                                    </IonSegmentContent>
                                ))}
                            </IonSegmentView>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >
    );
};

export default AnalyticsPage;
