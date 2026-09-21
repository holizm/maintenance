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
        placeholder='coreAsset'
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
        placeholder='stateMachinesState'
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
