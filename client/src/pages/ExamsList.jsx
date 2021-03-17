
import React, { Component } from 'react'
import ReactTable from "react-table-6"
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateExam extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/exams/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteExam extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the exam ${this.props.id} permanently?`,
            )
        ) {
            api.deleteExamById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class ExamsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exams: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllExams().then(exams => {
            this.setState({
                exams: exams.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { exams, isLoading } = this.state
        console.log('TCL: ExamsList -> render -> exams', exams)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Leukocytes (/mm3)',
                accessor: 'leukocytes',
                filterable: true,
            },
            {
                Header: 'Lymphocytes (/mm3)',
                accessor: 'lymphocytes',
                filterable: true,
            },
            {
                Header: 'Neutrophils (/mm3)',
                accessor: 'neutrophils',
                filterable: true,
            },
            {
                Header: 'Basophils (/mm3)',
                accessor: 'basophils',
                filterable: true,
            },
            {
                id: 'result',
                Header: 'Result',
                accessor: d => {if (d.result) return 'Detected'
                                else return 'Not Detected' },
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteExam id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateExam id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!exams.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={exams}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ExamsList