import React from 'react';
import data from '../data/lev3_4_projekt_js-reactjs_contacts.json'
import { v4 as uuidv4 } from 'uuid';

class ContactList extends React.Component {
    state = {
        //get the first five elements from array
        data: data.slice(0, 5),
    }
    handleAddRandomContact = () => {
        //get random contact from array
        let newContact = [...data].slice()[Math.floor(Math.random() * data.length)]
        //override array with the old array and add random contact
        this.setState({
            data: [
                ...this.state.data,
                {
                    name: newContact.name,
                    pictureUrl: newContact.pictureUrl,
                    popularity: newContact.popularity
                }
            ]
        });
    }
    handleSortContactByName = () => {
        //store array in new variable and sort it by name
        let tmp = [...this.state.data]
        tmp.sort((a, b) => (a.name < b.name) ? -1 : (b.name < a.name) ? 1 : 0)
        this.setState({ data: tmp });
    }
    handleSortContactByNameDesc = () => {
        //store array in new variable and sort it by name
        let tmp = [...this.state.data]
        tmp.sort((a, b) => (a.name < b.name) ? 1 : (b.name < a.name) ? -1 : 0)
        this.setState({ data: tmp });
    }
    handleRemoveContact = (name) => {
        let tmp = [...this.state.data]
        let filter = tmp.filter(contact => contact.name !== name)
        this.setState({ data: filter });
    }
    render() {
        return <div>
            <div id="buttonBar">
                <button onClick={this.handleAddRandomContact}>Add Random Contact</button>
                <button onClick={this.handleSortContactByName}>Sort by Name Asc</button>
                <button onClick={this.handleSortContactByNameDesc}>Sort by Name Desc</button>
            </div>
            <table id="tbl">
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popolarity</th>
                    <th>Action</th>
                </tr>
                {this.state.data.map((contact) =>
                    <tr key={uuidv4()}>
                        <td><img src={contact.pictureUrl} alt={contact.name}></img></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity}</td>
                        <td><button onClick={() => this.handleRemoveContact(contact.name)}>Remove Contact</button></td>
                    </tr>)}
            </table>
        </div>;
    }
}

export default ContactList;