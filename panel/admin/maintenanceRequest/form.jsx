import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        number
        required
    />
    <Text
        asset
        required
    />
    <DateTime
        reportedDate
        required
    />
    <Select
        maintenancePriority
        options={[
            'low',
            'normal',
            'high',
            'urgent',
        ]}
        placeholder='priority'
        required
    />
    <LongText
        fault
        required
    />
</>

export default <DialogForm inputs={inputs} />
