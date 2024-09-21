function Array3Example(){
    const students = [
        {
            'id': 1,
            'name': 'Imran',
            'email': 'test@gmail.com'
        },
        {
            'id': 2,
            'name': 'khan',
            'email': 'test2@gmail.com'
        },
        {
            'id': 3,
            'name': 'Danish',
            'email': 'test3@gmail.com'

        }
    ]

    return(
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        {
            students.map((student,index) => (
                <tr data-index={index}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                </tr>
            ))
        }

        </table>
    )
}

export default Array3Example;