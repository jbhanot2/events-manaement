import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { connect } from 'react-redux';

const EventListing = (props) => {
    let data = {
        columns : [
           {
             label: 'Discount',
             field: 'discount',
             sort: 'asc',
             width: 150
           },
           {
             label: 'Description',
             field: 'description',
             sort: 'asc',
             width: 100
           },
           {
               label: 'Event Name',
               field: 'event_name',
               sort: 'asc',
               width: 100
             },
             {
               label: 'Price',
               field: 'price',
               sort: 'asc',
               width: 100
             },
             {
                label: 'Venue',
                field: 'venue',
                sort: 'asc',
                width: 100
              }
         ]}
         data.rows = props.data;       
    return (
        <div>
            <MDBDataTable
                striped
                bordered
                large="true"
                hover
                materialSearch
                data={data}
                tbodyColor="yellow"
                responsiveXl
                responsiveSm
                responsive
                responsiveLg
                responsiveMd
                small
                btn
            />

        </div>
    )
}

const mapStateToProps = (state) => {
    let mapToState = {};
    mapToState['data'] = state.reducer;
    return mapToState;
 };

export default connect(mapStateToProps, null)(EventListing);