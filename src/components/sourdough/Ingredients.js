import React, { Component } from "react";
import { css } from "emotion";

const ulStyle = css`
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 12px;
  }
`;

class Ingredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: "hidden",
    };
  }

  getIngredients(breadCount) {
    const breadFlourUnit = 100;
    const allPurposeFlourUnit = 400;
    const wholeWheatUnit = 0;
    const waterUnit = 325;
    const starterUnit = 150;
    const saltUnit = 13;

    return {
      breadFlour: breadFlourUnit * breadCount,
      allPurposeFlour: allPurposeFlourUnit * breadCount,
      wholeWheat: wholeWheatUnit * breadCount,
      water: waterUnit * breadCount,
      starter: starterUnit * breadCount,
      salt: saltUnit * breadCount,
    };
  }
  render() {
    const ingredients = this.getIngredients(this.props.formData.breadCount);

    return (
      <div className={`ingredients ${this.state.visibility}`}>
        <ul className={ulStyle}>
          <li>
            <strong>{ingredients.breadFlour}g</strong> bread flour
          </li>
          <li>
            <strong>{ingredients.allPurposeFlour}g</strong> all purpose flour
          </li>
          <li>
            <strong>{ingredients.wholeWheat}g</strong> Whole wheat flour
          </li>
          <li>
            <strong>{ingredients.water}g</strong> water
          </li>
          <li>
            <strong>{ingredients.starter}g</strong> starter
          </li>
          <li>
            <strong>{ingredients.salt}g</strong> salt
          </li>
        </ul>
      </div>
    );
  }
}

export default Ingredients;
