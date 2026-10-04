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
    <Select
        options={[
            'draft',
            'scheduled',
            'inProgress',
            'paused',
            'completed',
            'cancelled',
        ]}
        placeholder='state'
        required
        workOrderStatus
    />
    <DateTime scheduledDate />
    <Text technician />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
