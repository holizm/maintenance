import { DateTime } from 'list'

export default item => <>
    <td>{item.number}</td>
    <td>{item.asset?.title}</td>
    <DateTime value={item.reportedDate} />
    <td>{item.maintenancePriority}</td>
</>
