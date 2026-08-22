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
    <DateTime
        placeholder='maintenanceReportedDate'
        property='reportedDate'
        required
    />
    <Select
        options={[
            'low',
            'normal',
            'high',
            'urgent',
        ]}
        placeholder='maintenancePriority'
        property='maintenancePriority'
        required
    />
    <LongText
        placeholder='maintenanceFault'
        property='fault'
        required
    />
</>

export default <DialogForm inputs={inputs} />
