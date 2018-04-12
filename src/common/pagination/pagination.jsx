import React, { Component } from 'react'


class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            currentPage: 1,
            dataPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.data !== this.props.data) {
            this.setState({ data: this.props.data})


        }
    }

    handleClick(event) {
        event.preventDefault()
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {
        const { data, currentPage, dataPerPage } = this.state;
        const indexOfLastTodo = currentPage * dataPerPage;
        const indexOfFirstTodo = indexOfLastTodo - dataPerPage;
        const currentdata = data.slice(indexOfFirstTodo, indexOfLastTodo);

        //dado que sera renderizado
        const renderdata = currentdata.map((todo, index) => {
            return(
                <tr key={index}>
                    <td >
                        {todo.name}
                    </td>
                    <td className='white-space'>
                        {todo.size} Bytes
                    </td>
                </tr>
            )
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
            pageNumbers.push(i);
        }

        //paginacao itens {numeros}
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li key={number} >
                    <a href="#" id={number} onClick={this.handleClick} >{number}</a> 
                </li>
            );
        });

        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr >
                            <th>Nome</th>
                            <th>Tamanho</th>
                            <th>Remover</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderdata}
                    </tbody>
                </table>
        
                <ul id="page-numbers" className="pagination pagination-sm no-margin pull-right ">
                    {renderPageNumbers}
                </ul>
            </div>
        );
    }
}



export default Pagination