import Button from "@material-ui/core/Button";
import React, {useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import {useForm, Controller} from "react-hook-form";
import Grid from '@material-ui/core/Grid';

import {getColis, postColis, putColis, deleteColis} from '../../actions/index';
import {connect} from "react-redux";


const Colis = (props) => {

    useEffect(() => {
        props.getColis();
    }, [])

    const {control, handleSubmit} = useForm();

    return (
        <>
            <ul>
                {
                    props.colis.map((colis, index) => {
                        return (
                            <li key={index}>{`Destination: ${colis.destination}, Sender: ${colis.sender}, Receiver: ${colis.receiver}`}</li>
                        )
                    })
                }
            </ul>
            <form onSubmit={handleSubmit(props.postColis)}>
                <Grid container>
                    <Grid item xs={12}>
                        <Controller
                            rules={{required: true}}
                            name="destination"
                            control={control}
                            defaultValue={""}
                            render={({onChange, value, name, ref}, {invalid}) => {
                                return (
                                    <TextField error={invalid}
                                               required
                                               inputRef={ref} fullWidth onChange={onChange}
                                               value={value}
                                               id={name} label="Colis destination" multiline rowsMax={4}/>
                                );
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            rules={{required: true}}
                            name="receiver"
                            control={control}
                            defaultValue={""}
                            render={({onChange, value, name, ref}, {invalid}) => {
                                return (
                                    <TextField error={invalid}
                                               required inputRef={ref} fullWidth onChange={onChange} value={value}
                                               id={name}
                                               label="Receiver"/>
                                );
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            rules={{required: true}}
                            name="sender"
                            control={control}
                            defaultValue={""}
                            render={({onChange, value, name, ref}, {invalid}) => {
                                return (
                                    <TextField error={invalid}
                                               required inputRef={ref} fullWidth onChange={onChange} value={value}
                                               id={name}
                                               label="Sender"/>
                                );
                            }}
                        />
                    </Grid>
                    <Grid container>
                        <Grid item xs={12}>
                            <Button type="submit" color="primary" autoFocus>
                                {"Submit"}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

Colis.propTypes = {
};

const mapStateToProps = (state) => {
    return {
        colis: state.colis.colis,
    }
}
const mapDispatchToProps = {getColis, postColis, putColis, deleteColis}

export default connect(mapStateToProps, mapDispatchToProps)(Colis)

