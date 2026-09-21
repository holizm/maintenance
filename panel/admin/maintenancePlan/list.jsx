import {
    DateTime,
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>maintenancePlan</th>
    <th>coreAsset</th>
    <th>maintenanceType</th>
    <th>maintenanceNextServiceDate</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.asset?.title}</td>
    <td>{item.maintenanceType}</td>
    <DateTime value={item.nextServiceDate} />
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
