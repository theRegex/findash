// DO NOT MODIFY THIS COMPONENT, ONLY IMPORT IT...
import React from "react";
import PropTypes from "prop-types";

class BuilderTable extends React.Component {
  createColumnGroup() {
    let tempArray = new Array(this.props.headers.length);
    tempArray.fill(0);
    return tempArray.map((val, index) => {
      return<col id={`t_col_${index}`} key={index} />;
    });
  }
  cellClicked(data, event) {
    if(this.props.onColumnClick) {
      this.props.onColumnClick(data, event);
    }
  }
  cellModified(data, event) {
    if(this.props.onCellChanged) {
      this.props.onCellChanged(data, event);
    }
  }
  createRows() {
    if(!this.props.dataset.length) return"";
    let elementSet = [];
    let i = 0;
    for(i; i < this.props.dataset.length; i++) {
      let object = this.props.dataset[i];
      let objectKeys = this.dropIgnoredProperties(Object.keys(object));
      let newElements = objectKeys.map((propName, index) => {
        let eventData = {
          row: i,
          col: index,
          key: propName,
          value: object[propName],
          rowData: object
        };
        let elementValue = this.props.formatFunction
          ? this.props.formatFunction(object[propName], eventData)
          : object[propName];
        let customElementObject =
          this.props.construct &&
          this.props.construct.find(el => el.cellName === propName);

        if(customElementObject) {
          let customElement = null;
          customElement = this.createElementNode(
            customElementObject,
            elementValue,
            eventData
          );
          return(
            <td
              key={index}
              data-column={this.props.headers[index]}
              onClick={this.cellClicked.bind(this, eventData)}
            >
              {customElement}
            </td>
          );
        }
        return(
          <td
            key={index}
            data-column={this.props.headers[index]}
            onClick={this.cellClicked.bind(this, eventData)}
          >
            {elementValue}
          </td>
        );
      });

      elementSet.push(
        <tr
          key={i}
          ref={`col${i}`}
          className={
            `t_row_${i} ` +
            (i % 2 === 0 && this.props.rowClassName ? this.props.rowClassName : "")
          }
        >
          {newElements}
        </tr>
      );
    }

    return elementSet;
  }
  dropIgnoredProperties(keyList) {
    if(!this.props.ignore) return keyList;

    return keyList.filter(keyItem => this.props.ignore.indexOf(keyItem) < 0);
  }
  createElementNode(settings, value, eventData) {
    switch(settings.nodeType) {
      case "input":
        return(
          <input
            type={settings.inputType}
            defaultValue={value}
            min={"0"}
            max={"999"}
            onChange={this.cellModified.bind(this, eventData)}
          />
        );
      case "link":
        return<a href={settings.anchorUrl}>{settings.anchorText || value}</a>;
      case "custom":
        return settings.element;
      default:
        return<div>{value}</div>;
    }
  }
  createHeaders() {
    return this.props.headers.map((headerTitle, index) => {
      return(
        <th
          ref={`col${index}`}
          key={index}
          className={this.props.headerClassName || ""}
          data-header={headerTitle.split(" ").join("")}
          onClick={this.cellClicked.bind(this, headerTitle)}
        >
          {headerTitle}
        </th>
      );
    });
  }
  render() {
    console.log("inside table: ", this.props.dataset);
    return(
      <table
        css={this.props.tableCss}
        ref={this.props.name}
        className={this.props.tableClass || ""}
      >
        <colgroup>{this.createColumnGroup()}</colgroup>
        <thead>
          <tr>
            {this.props.checkboxChange && (
              <th data-header={"checkbox"}>
                <input
                  className={"table-checkbox"}
                  type={"checkbox"}
                  defaultChecked={false}
                  onChange={this.props.checkboxChange}
                />
              </th>
            )}
            {this.createHeaders()}
          </tr>
        </thead>
        <tbody>
          {this.createRows()}
          {this.props.customRows && this.props.customRows()}
        </tbody>
        {this.props.renderFooter && <tfoot>{this.props.renderFooter()}</tfoot>}
      </table>
    );
  }
}

BuilderTable.propTypes = {
  headers: PropTypes.array.isRequired,
  dataset: PropTypes.array.isRequired,
  onColumnClick: PropTypes.func,
  onCellChanged: PropTypes.func,
  checkboxChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  headerClassName: PropTypes.string,
  tableClass: PropTypes.string,
  tableCss: PropTypes.any,
  formatFunction: PropTypes.func,
  customRows: PropTypes.func,
  renderFooter: PropTypes.func,
  rowClassName: PropTypes.string,
  ignore: PropTypes.arrayOf(PropTypes.string.isRequired),
  construct: PropTypes.arrayOf(
    PropTypes.shape({
      cellName: PropTypes.string.isRequired,
      nodeType: PropTypes.string.isRequired,
      inputType: PropTypes.string,
      anchorUrl: PropTypes.string,
      anchorText: PropTypes.string,
      element: PropTypes.element
    })
  )
};

export const Table = BuilderTable;
