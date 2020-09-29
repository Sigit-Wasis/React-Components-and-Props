import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //state is by default an object
            id: '',
            provinsi: '',
            provinsis: [
               { id: 18, provinsi: 'Lampung' }
            ],
            addIdProvinsi: {"id": 18, "provinsi": "Lampung"}
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // ===============================
    // HANDLE onChange FORM
    // ===============================
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    // ===============================
    // HANDLE SUBMIT FORM
    // ===============================
    handleSubmit = (event) => {
        event.preventDefault()

        const newData = {
            id: this.state.id,
            provinsi: this.state.provinsi
        };

        // push provinsis
        this.setState(state => ({
            provinsis: [ ...state.provinsis, newData]
        }));

        // update addIdProvinsi
        this.setState({addIdProvinsi: newData});
    }

    // ===============================
    // RENDER TABLE 
    // ===============================
    renderTableData() {
        return this.state.provinsis.map((province, index) => {
           const { id, provinsi } = province 
           return (
              <tr key={index}>
                 <td>{id}</td>
                 <td>{provinsi}</td>
              </tr>
           )
        })
    }

    render() {
        return <div className="body">
            <h1 id='title'>{this.props.title}</h1>
            <table id='provinsis'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PROVINSI</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </table>

            <div style={styles.container}>

                <form onSubmit={this.handleSubmit}>
                    ID: 
                    <input type="text" onChange={this.handleChange} name="id" />
                    <span>&nbsp;</span> <span>&nbsp;</span>

                    PROVINSI: 
                    <input type="text" onChange={this.handleChange} name="provinsi" />
                    <span>&nbsp;</span>
                    
                    <button>TAMBAH</button>
                </form>

            </div>

            <div style={styles.container}>
            Baru Saja ditambahkan:
            <br></br>ID: <span> {this.state.addIdProvinsi.id } </span>
            <br></br>PROVINSI: <span> {this.state.addIdProvinsi.provinsi } </span>
            </div>
        </div>;
    }
}

const styles = {
    container: {
        border: '1px solid black',
        padding: '10px',
        marginTop: '20px'
    }
};

export default Table;