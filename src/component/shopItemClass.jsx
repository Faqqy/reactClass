import React from 'react';

class shopItemClass extends React.Component {
    render() {
      return (
        <div className="main-content">
            <h2>{this.props.brand}</h2>
            <h1>{this.props.title}</h1>
            <h3>{this.props.description}</h3>
            <div className="description">
                {this.props.descriptionFull}
            </div>
            <div className="highlight-window mobile"><div class="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div className="purchase-info">
            <div className="price">{this.props.currency}{this.props.price.toFixed(2)}</div>
            <button>Добавить в корзину</button>
            </div>
        </div>
      )
    }
  }

export default shopItemClass
