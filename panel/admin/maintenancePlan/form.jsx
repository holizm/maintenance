import {
    Boolean,
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='asset'
        property='asset'
        required
    />
    <Select
        options={[
            'preventive',
            'corrective',
            'predictive',
            'inspection',
        ]}
        placeholder='type'
        property='maintenanceType'
        required
    />
    <Numeric
        placeholder='intervalDays'
        property='intervalDays'
    />
    <DateTime
        placeholder='nextServiceDate'
        property='nextServiceDate'
    />
    <LongText
        placeholder='instructions'
        property='instructions'
    />
    <Boolean
        placeholder='active'
        property='active'
    />
</>

export default <DialogForm inputs={inputs} />
