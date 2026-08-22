import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>maintenanceNumber</th>
    <th>maintenanceAsset</th>
    <th>maintenanceReportedDate</th>
    <th>maintenancePriority</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.asset?.title}</td>
    <DateTime value={item.reportedDate} />
    <td>{item.maintenancePriority}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
