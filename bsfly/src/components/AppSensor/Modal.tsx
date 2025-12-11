import { FC, useRef } from 'react';
import {
    IonModal,
    IonContent,
    IonTitle,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonSegment,
    IonSegmentButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonSegmentView,
    IonSegmentContent,
    IonCol,
} from '@ionic/react';
import { useCycle } from '../../context/CycleContext';
import { thermometerOutline, timerOutline } from 'ionicons/icons';
import { controlsData } from '../../assets/assets';
import { ControlToggle, TimeSelection } from '../AppControls/Controls';

const ControlModal: FC = () => {
    const { stage } = useCycle()
    const modal = useRef<HTMLIonModalElement>(null);

    return (
        <IonModal ref={modal} trigger="open-control-modal" initialBreakpoint={1} breakpoints={[0, 0.5, 0.7, 1]}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Controls for {stage} Enclosure</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => modal.current?.dismiss()}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonSegment>
                    <IonSegmentButton value="controls" contentId="controls">
                        <IonIcon icon={thermometerOutline} />
                    </IonSegmentButton>
                    <IonSegmentButton value="timer" contentId="timer">
                        <IonIcon icon={timerOutline} />
                    </IonSegmentButton>
                </IonSegment>
                <IonGrid>
                    <IonSegmentView>
                        <IonSegmentContent id="controls">
                            <IonRow class="ion-justify-content-center ion-align-items-center">
                                {controlsData.map((control, index) => (
                                    <IonCol key={index} size="12" sizeMd="6" sizeLg="4">
                                        <ControlToggle
                                            key={index}
                                            cardTitle={control.name}
                                            description={control.description}
                                        ></ControlToggle>
                                    </IonCol>
                                ))}
                            </IonRow>
                        </IonSegmentContent>
                        <IonSegmentContent id="timer">
                            <TimeSelection></TimeSelection>
                        </IonSegmentContent>
                    </IonSegmentView>
                </IonGrid>
            </IonContent>
        </IonModal>
    );
}

export default ControlModal;
