import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className={'row'}>
        <h1 className={'col-8'}>Counting Calories</h1>
        <h5 className={'col-4'}>Average Calorie Intake: </h5>
      </div>
    );
  }
}
