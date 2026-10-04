import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='asset'
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
        placeholder='state'
        property='workOrderStatus'
        required
    />
    <DateTime
        placeholder='scheduledDate'
        property='scheduledDate'
    />
    <Text
        placeholder='technician'
        property='technician'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
