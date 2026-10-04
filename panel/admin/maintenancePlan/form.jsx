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
        asset
        required
    />
    <Select
        maintenanceType
        options={[
            'preventive',
            'corrective',
            'predictive',
            'inspection',
        ]}
        placeholder='type'
        required
    />
    <Numeric intervalDays />
    <DateTime nextServiceDate />
    <LongText instructions />
    <Boolean active />
</>

export default <DialogForm inputs={inputs} />
