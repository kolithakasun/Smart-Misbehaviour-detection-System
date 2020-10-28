import React, { Component } from 'react';
import Axios from 'axios';
import Swal from "sweetalert2";
import SiteLoading from "../siteloading/SiteLoading";

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        this.setState({
            isLoading: true
        })
        Axios.get('https://api.thingspeak.com/channels/1204399/feeds.json?api_key=Z3JI4ZT6E6T8VFUX')
            .then(res => {
                this.setState({
                    data: res.data.feeds,
                    isLoading: false
                })
                console.log(res.data.feeds);

            })
            .catch(err => {
                this.setState({
                    isLoading: false
                })
                Swal.fire({
                    icon: "error",
                    title: "Something went wrong!",
                    text: err
                });
            })
    }

    render() {
        if (this.state.isLoading) {
            return <SiteLoading />
        }
        return (
            <div>
                <div className="ml-5 mr-5 mb-5 mt-2 p-2" >
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="card bg-light">
                                <div className="card-body" align="center" >
                                    <table className="table table-bordered text-center" align="center" style={{marginBottom:"-20px"}}>
                                        <thead >
                                        <tr>
                                            <th scope="col" style={{backgroundColor:"#2a3d66"}}><h4>Date</h4></th>
                                            <th scope="col" style={{backgroundColor:"#4f488c"}}><h4>Id</h4></th>
                                            <th scope="col" style={{backgroundColor:"#8354a8"}}><h4>Notification</h4></th>
                                            <th scope="col" style={{backgroundColor:"#ad6fad"}}><h4>Camera No</h4></th>
                                            <th scope="col" style={{backgroundColor:"#d9a9a9"}}><h4>Angle</h4></th>
                                            <th scope="col" style={{backgroundColor:"#d9bfbf"}}><h4>Address</h4></th>

                                        </tr>
                                        </thead>
                                        <tbody>

                                        {this.state.data.map((value,index) =>{
                                            return (
                                                <tr key={index}>
                                                    <td style={{backgroundColor:"#3b5794"}} className="p-5">
                                                        <h5 title="Date">{value.created_at}</h5>
                                                    </td>
                                                    <td style={{backgroundColor:"#5d54a4"}} className="p-5">
                                                        <h5 title="Id">{value.entry_id}</h5>
                                                    </td>
                                                    <td style={{backgroundColor:"#9d65c9"}} className="p-5">
                                                        <h5 title="Notification">{value.field1}</h5>
                                                    </td>
                                                    <td style={{backgroundColor:"#d789d7"}} className="p-5">
                                                        <h5 title="Camera No">{value.field2}</h5>
                                                    </td>
                                                    <td style={{backgroundColor:"#ffc7c7"}} className="p-5">
                                                        <h5 title="Angle">{value.field3}</h5>
                                                    </td>
                                                    <td style={{backgroundColor:"#ffe2e2"}} className="p-5">
                                                        <h5 title="Address">{value.field4}</h5>
                                                    </td>
                                                </tr>
                                            );
                                        })}

                                        </tbody>
                                    </table>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
