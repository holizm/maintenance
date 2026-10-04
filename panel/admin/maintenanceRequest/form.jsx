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
    <DateTime
        placeholder='reportedDate'
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
        placeholder='priority'
        property='maintenancePriority'
        required
    />
    <LongText
        placeholder='fault'
        property='fault'
        required
    />
</>

export default <DialogForm inputs={inputs} />
