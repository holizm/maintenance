import { DateTime } from 'list'

export default item => <>
    <td>{item.title}</td>
    <td>{item.asset?.title}</td>
    <td>{item.maintenanceType}</td>
    <DateTime value={item.nextServiceDate} />
</>
