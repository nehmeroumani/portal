import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { translate, changeLocale, Title } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import compose from 'recompose/compose';
import { changeTheme } from './actions';

const styles = {
    label: { width: '10em', display: 'inline-block' },
    button: { margin: '1em' },
};

const Configuration = ({
    classes,
    theme,
    locale,
    changeTheme,
    changeLocale,
    translate,
}) => (
    <Card>
        <Title title={translate('general.configuration')} />
        {/* <CardContent>
            <div className={classes.label}>{translate('pos.theme.name')}</div>
            <Button
                variant="raised"
                className={classes.button}
                color={theme === 'light' ? 'primary' : 'default'}
                onClick={() => changeTheme('light')}
            >
                {translate('pos.theme.light')}
            </Button>
            <Button
                variant="raised"
                className={classes.button}
                color={theme === 'dark' ? 'primary' : 'default'}
                onClick={() => changeTheme('dark')}
            >
                {translate('pos.theme.dark')}
            </Button>
        </CardContent> */}
        <CardContent>
            <div className={classes.label}>{translate('resources.general.language')}</div>
            <Button
                variant="raised"
                className={classes.button}
                color={locale === 'ar' ? 'primary' : 'default'}
                onClick={() => {
                    changeLocale('ar');
                    changeTheme('light');
                    localStorage.setItem('lang','ar');
                    document.getElementById("body").style.direction = "rtl";
                    document.getElementById("body").classList.remove('en-lang');
                }}
            >
                ar
            </Button>
            <Button
                variant="raised"
                className={classes.button}
                color={locale === 'en' ? 'primary' : 'default'}
                onClick={() => {
                    changeLocale('en');
                    changeTheme('light');
                    localStorage.setItem('lang','en');
                    document.getElementById("body").style.direction = "ltr";
                    document.getElementById("body").classList.add('en-lang');
                }}
            >
                en
            </Button>
        </CardContent>
    </Card>
);

const mapStateToProps = state => ({
    theme: state.theme,
    locale: state.i18n.locale,
});

const enhance = compose(
    connect(
        mapStateToProps,
        {
            changeLocale,
            changeTheme,
        }
    ),
    translate,
    withStyles(styles)
);

export default enhance(Configuration);