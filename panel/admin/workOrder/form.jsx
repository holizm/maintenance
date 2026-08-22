import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='maintenanceNumber'
        property='number'
        required
    />
    <Text
        placeholder='maintenanceAsset'
        property='asset'
        required
    />
    <Select
        options={[
            'draft',
            'scheduled',
            'inProgress',
            'paused',
            'completed',
            'cancelled',
        ]}
        placeholder='maintenanceStatus'
        property='workOrderStatus'
        required
    />
    <DateTime
        placeholder='maintenanceScheduledDate'
        property='scheduledDate'
    />
    <Text
        placeholder='maintenanceTechnician'
        property='technician'
    />
    <LongText
        placeholder='maintenanceDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
