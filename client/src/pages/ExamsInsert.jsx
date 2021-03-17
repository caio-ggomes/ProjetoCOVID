import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ExamsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            leukocytes: null,
            lymphocytes: null,
            neutrophils: null,
            basophils: null,
            result: null,
        }
    }

    handleChangeInputLeukocytes = async event => {
        const leukocytes = event.target.value
        this.setState({ leukocytes })
    }
    handleChangeInputLymphocytes = async event => {
        const lymphocytes = event.target.value
        this.setState({ lymphocytes })
    }
    handleChangeInputNeutrophils = async event => {
        const neutrophils = event.target.value
        this.setState({ neutrophils })
    }
    handleChangeInputBasophils = async event => {
        const basophils = event.target.value
        this.setState({ basophils })
    }
    handleChangeInputResult = async event => {
        const result = event.target.value
        this.setState({ result })
    }

    handleIncludeExam = async () => {
        const { leukocytes, lymphocytes, neutrophils, basophils, result } = this.state
        const payload = this.state

        await api.insertExam(payload).then(res => {
            window.alert(`Exam inserted successfully`)
            this.setState({
                leukocytes: null,
                lymphocytes: null,
                neutrophils: null,
                basophils: null,
                result: false,
            })
        })
    }

    render() {
        const { leukocytes, lymphocytes, neutrophils, basophils, result } = this.state
        return (
            <Wrapper>
                <Title>Create Exam</Title>

                <Label>Leukocytes: </Label>
                <InputText
                    type="number"
                    value={leukocytes}
                    onChange={this.handleChangeInputLeukocytes}
                />

                <Label>Lymphocytes: </Label>
                <InputText
                    type="number"
                    value={lymphocytes}
                    onChange={this.handleChangeInputLymphocytes}
                />

                <Label>Neutrophils: </Label>
                <InputText
                    type="number"
                    value={neutrophils}
                    onChange={this.handleChangeInputNeutrophils}
                />

                <Label>Basophils: </Label>
                <InputText
                    type="number"
                    value={basophils}
                    onChange={this.handleChangeInputBasophils}
                />

                <Label>Result: </Label>
                <InputText
                    type="text"
                    value={result}
                    onChange={this.handleChangeInputResult}
                />

                

                <Button onClick={this.handleIncludeExam}>Add Exam</Button>
                <CancelButton href={'/exams/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ExamsInsert