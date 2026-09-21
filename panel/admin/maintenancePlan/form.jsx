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
        placeholder='coreAsset'
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
        placeholder='maintenanceType'
        property='maintenanceType'
        required
    />
    <Numeric
        placeholder='maintenanceIntervalDays'
        property='intervalDays'
    />
    <DateTime
        placeholder='maintenanceNextServiceDate'
        property='nextServiceDate'
    />
    <LongText
        placeholder='maintenanceInstructions'
        property='instructions'
    />
    <Boolean
        placeholder='maintenanceActive'
        property='active'
    />
</>

export default <DialogForm inputs={inputs} />
