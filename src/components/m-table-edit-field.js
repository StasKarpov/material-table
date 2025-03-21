import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
  DateTimePicker,
} from "@material-ui/pickers";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

class MTableEditField extends React.Component {
  getProps() {
    const {
      columnDef,
      rowData,
      onRowDataChange,
      errorState,
      onBulkEditRowChanged,
      ...props
    } = this.props;

    return props;
  }

  renderLookupField() {
    const { helperText, error, ...props } = this.getProps();
    return (
      <FormControl error={Boolean(error)}>
        <Select
          {...props}
          value={this.props.value === undefined ? "" : this.props.value}
          onChange={(event) => this.props.onChange(event.target.value)}
          style={{
            fontSize: 13,
          }}
          SelectDisplayProps={{ "aria-label": this.props.columnDef.title }}
        >
          {Object.keys(this.props.columnDef.lookup).map((key) => (
            <MenuItem key={key} value={key}>
              {this.props.columnDef.lookup[key]}
            </MenuItem>
          ))}
        </Select>
        {Boolean(helperText) && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }

  renderBooleanField() {
    const { helperText, error, ...props } = this.getProps();

    return (
      <FormControl error={Boolean(error)} component="fieldset">
        <FormGroup>
          <FormControlLabel
            label=""
            control={
              <Checkbox
                {...props}
                value={String(this.props.value)}
                checked={Boolean(this.props.value)}
                onChange={(event) => this.props.onChange(event.target.checked)}
                style={{
                  padding: 0,
                  width: 24,
                  marginLeft: 9,
                }}
                inputProps={{
                  "aria-label": this.props.columnDef.title,
                }}
              />
            }
          />
        </FormGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }

  renderDateField() {
    const dateFormat =
      this.props.columnDef.dateSetting &&
      this.props.columnDef.dateSetting.format
        ? this.props.columnDef.dateSetting.format
        : "dd.MM.yyyy";
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={this.props.locale}>
        <DatePicker
          {...this.getProps()}
          format={dateFormat}
          value={this.props.value || null}
          onChange={this.props.onChange}
          clearable
          InputProps={{
            style: {
              fontSize: 13,
            },
          }}
          inputProps={{
            "aria-label": `${this.props.columnDef.title}: press space to edit`,
          }}
        />
      </MuiPickersUtilsProvider>
    );
  }
  renderTimeField() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={this.props.locale}>
        <TimePicker
          {...this.getProps()}
          format="HH:mm:ss"
          value={this.props.value || null}
          onChange={this.props.onChange}
          clearable
          InputProps={{
            style: {
              fontSize: 13,
            },
            inputProps: {
              "aria-label": `${this.props.columnDef.title}: press space to edit`,
            },
          }}
        />
      </MuiPickersUtilsProvider>
    );
  }

  renderDateTimeField() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={this.props.locale}>
        <DateTimePicker
          {...this.getProps()}
          format="dd.MM.yyyy HH:mm:ss"
          value={this.props.value || null}
          onChange={this.props.onChange}
          clearable
          InputProps={{
            style: {
              fontSize: 13,
            },
            inputProps: {
              "aria-label": `${this.props.columnDef.title}: press space to edit`,
            },
          }}
        />
      </MuiPickersUtilsProvider>
    );
  }

  renderTextField() {
    const thisProps = this.getProps();
    const inputStyle = {
      minWidth: "50px",
    };
    return (
      <TextField
        {...thisProps}
        fullWidth
        style={
          this.props.columnDef.type === "numeric" ? { float: "right" } : {}
        }
        type={this.props.columnDef.type === "numeric" ? "number" : "text"}
        placeholder={
          this.props.columnDef.editPlaceholder || this.props.columnDef.title
        }
        value={this.props.value === undefined ? "" : this.props.value}
        onChange={(event) =>
          this.props.onChange(
            this.props.columnDef.type === "numeric"
              ? event.target.valueAsNumber
              : event.target.value
          )
        }
        InputProps={{
          style: {
            fontSize: 13,
            ...inputStyle,
          },
          inputProps: {
            "aria-label": this.props.columnDef.title,
            ...thisProps.inputProps,
          },
          onFocus: ({ target }) => {
            if (
              this.props.columnDef.selectOnFocus &&
              target.tagName === "INPUT"
            ) {
              target.select();
            }
          },
        }}
      />
    );
  }

  renderCurrencyField() {
    return (
      <TextField
        {...this.getProps()}
        placeholder={
          this.props.columnDef.editPlaceholder || this.props.columnDef.title
        }
        style={{ float: "right" }}
        type="number"
        value={this.props.value === undefined ? "" : this.props.value}
        onChange={(event) => {
          let value = event.target.valueAsNumber;
          if (!value && value !== 0) {
            value = undefined;
          }
          return this.props.onChange(value);
        }}
        inputProps={{
          style: {
            fontSize: 13,
            textAlign: "right",
            "aria-label": this.props.columnDef.title,
          },
        }}
        onKeyDown={this.props.onKeyDown}
        autoFocus={this.props.autoFocus}
      />
    );
  }

  renderArrayLookupField() {
    const { helperText, error, ...props } = this.getProps();
    return (
      <Box display="flex" flexDirection="column">
        {this.props.value.map((value, index) => (
          <FormControl key={index} error={Boolean(error)}>
            <Select
              {...props}
              value={value === undefined ? "" : value}
              onChange={(event) =>
                this.props.onChange(
                  this.props.value.map((v, i) =>
                    i == index ? event.target.value : v
                  )
                )
              }
              style={{
                fontSize: 13,
              }}
              SelectDisplayProps={{ "aria-label": this.props.columnDef.title }}
            >
              {Object.keys(this.props.columnDef.lookup).map((key) => (
                <MenuItem key={key} value={key}>
                  {this.props.columnDef.lookup[key]}
                </MenuItem>
              ))}
            </Select>
            {Boolean(helperText) && (
              <FormHelperText>{helperText}</FormHelperText>
            )}
          </FormControl>
        ))}
      </Box>
    );
  }

  renderArrayTextField() {
    const thisProps = this.getProps();

    return thisProps.value.map((value, index) => (
      <TextField
        {...thisProps}
        key={index}
        fullWidth
        style={
          this.props.columnDef.type === "numeric" ? { float: "right" } : {}
        }
        type={this.props.columnDef.type === "numeric" ? "number" : "text"}
        placeholder={
          this.props.columnDef.editPlaceholder || this.props.columnDef.title
        }
        value={value === undefined ? "" : value}
        onChange={(event) => {
          const newValue =
            this.props.columnDef.type === "numeric"
              ? event.target.valueAsNumber
              : event.target.value;

          const newArray = thisProps.value.map((v, i) =>
            i === index ? newValue : v
          );
          this.props.onChange(newArray);
        }}
        InputProps={{
          style: {
            fontSize: 13,
          },
          inputProps: {
            "aria-label": this.props.columnDef.title,
            ...thisProps.inputProps,
          },
          onFocus: ({ target }) => {
            if (
              this.props.columnDef.selectOnFocus &&
              target.tagName === "INPUT"
            ) {
              target.select();
            }
          },
        }}
      />
    ));
  }

  render() {
    let component = "ok";

    if (Array.isArray(this.props.value) && this.props.columnDef.lookup) {
      component = this.renderArrayLookupField();
    } else if (Array.isArray(this.props.value)) {
      component = this.renderArrayTextField();
    } else if (this.props.columnDef.lookup) {
      component = this.renderLookupField();
    } else if (this.props.columnDef.type === "boolean") {
      component = this.renderBooleanField();
    } else if (this.props.columnDef.type === "date") {
      component = this.renderDateField();
    } else if (this.props.columnDef.type === "time") {
      component = this.renderTimeField();
    } else if (this.props.columnDef.type === "datetime") {
      component = this.renderDateTimeField();
    } else if (this.props.columnDef.type === "currency") {
      component = this.renderCurrencyField();
    } else {
      component = this.renderTextField();
    }

    return component;
  }
}

MTableEditField.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  columnDef: PropTypes.object.isRequired,
  locale: PropTypes.object,
};

export default MTableEditField;
