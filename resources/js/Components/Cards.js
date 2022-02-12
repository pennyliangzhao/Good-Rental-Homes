import React from 'react';
import '../../css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Send out your first Rate It today!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.svg'
              text='Rate My Landlord
             (A previous tenant’s rating of a landlord)'
              label='Tenants'
              path='/rate-landlord'
            />

            <CardItem
                src='images/img-4.svg'
                text="Rate My Tenant (Previous Landlord's rating of the tenant)"
                label='Landlords & Agencies'
                path='/rate-tenant'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.svg'
              text='Rate My Neighbour (A neighbor’s rating of the tenant)'
              label='Tenants'
              path='/rate-neighbour'
            />
            <CardItem
                src='images/img-2.svg'
                text='Rate my Flat (Feedback rating on the dwelling)'
                label='Tenants'
                path='/rate-house'
            />
            <CardItem
              src='images/img-8.svg'
              text='Rate me at home (A domestic reference. For use by tenants who have never rented before)'
              label='Tenants'
              path='/rate-at-home'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
