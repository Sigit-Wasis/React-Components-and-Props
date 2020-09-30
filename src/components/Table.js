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
            <div className="card">    
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
            </div>

            <div className="card">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>

                        <label htmlFor="ID">ID:</label>
                        <input type="text" onChange={this.handleChange} name="id" />

                        <label htmlFor="PROVINSI">PROVINSI:</label> 
                        <input type="text" onChange={this.handleChange} name="provinsi" />
                        
                        <button>TAMBAH</button>
                    </form>
                </div>
            </div>

            <div className="card">
                <p>Data Baru Ditambahkan:</p>
                <div className="container">

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>PROVINSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.addIdProvinsi.id }</td>
                            <td>{this.state.addIdProvinsi.provinsi }</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <h6>
                <i>@embuncode 2020</i>
            </h6>
        </div>;
    }
}

export default Table;