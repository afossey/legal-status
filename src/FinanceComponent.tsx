import React, {ChangeEvent, Component} from "react";
import {Card, CardContent, Grid, TextField, Typography} from "@material-ui/core";
import {observer} from "mobx-react";

@observer
export class FinanceComponent extends Component<any> {

  constructor(props: Readonly<any>) {
    super(props);
  }

  private updateAnnualRevenue = (event: ChangeEvent<HTMLInputElement>) => {
    const annualRevenue = parseFloat(event.target.value);
    this.props.financialData.setAnnualRevenueWithoutTaxes(
        annualRevenue && annualRevenue > 0 ? annualRevenue : 0);
  };

  private updateCharges = (event: ChangeEvent<HTMLInputElement>) => {
    const charges = parseFloat(event.target.value);
    this.props.financialData.setCharges(charges && charges > 0 ? charges : 0);
  };

  render() {
    return (
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography component={"h6"} variant={"h6"}>
                Revenus
              </Typography>
              <TextField
                  id="ae-revenue"
                  label="Chiffre d'affaire annuel € HT"
                  defaultValue={0}
                  onChange={this.updateAnnualRevenue}
                  margin="normal"
                  type="number"
                  fullWidth={true}
              />
              <TextField
                  id="ae-charges"
                  label="Charges annuel € HT"
                  defaultValue={0}
                  onChange={this.updateCharges}
                  margin="normal"
                  type="number"
                  fullWidth={true}
              />
            </CardContent>
          </Card>
        </Grid>
    )
  }
}