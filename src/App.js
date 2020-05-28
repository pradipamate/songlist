import React, { Component } from "react";
import ReactDom from "react-dom";
import { typesong } from "./practice/actions/songlist";
import { Input } from 'antd';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { connect } from "react-redux";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { song_name: null };
        this.onchangehandler = this.onchangehandler.bind(this);
    }

    onchangehandler = (event) => {
        // console.log(event.target.value);
        this.setState({
            song_name: event.target.value
        })
        var data = event.target.value;
        this.props.dispatch(typesong(data));
    }


    render() {
        var mylist = this.props.AvailableSonglistlist;
        if (mylist.length == 0) {
            var List = <li>No Song Found</li>
        }
        else {
            var Songlist = mylist.AvailableSonglistlist.results;
            List = Songlist.map(item => (
                <li>
                 TrackName: {item.trackName},  ArtistName: {item.artistName},  CollectionId: {item.collectionId}</li>
            ));
        }
        return (
            <div style={{ backgroundColor: "#2a283d", color: "wheat" }}>
                     <Row>
                       <Col span={14} offset={5}>
                            <h1 className="main_heading">iTunes List</h1>
                            <Input placeholder="Enter Song Name"  name="song_name" onChange={this.onchangehandler}/> 
                        </Col>
                        <Col span={14} offset={5} className="listing_part">
                            <ul>
                                {List}
                            </ul>
                        </Col>
                    </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        AvailableSonglistlist: state.Songlist
    };
};
export default connect(mapStateToProps)(App);
