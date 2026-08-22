import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>maintenanceNumber</th>
    <th>maintenanceAsset</th>
    <th>maintenanceScheduledDate</th>
    <th>maintenanceStatus</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.asset?.title}</td>
    <DateTime value={item.scheduledDate} />
    <td>{item.workOrderStatus}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
