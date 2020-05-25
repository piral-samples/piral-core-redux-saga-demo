import * as React from 'react';
/**
 * Shows a form.
 */
export const FormPilet = {
    content: '',
    name: 'Form Module',
    version: '1.0.0',
    hash: '429',
    setup(piral) {
        class MyForm extends React.Component {
            render() {
                const { formData, changeForm, changed, submitting, reset, error } = this.props;
                const { firstName, lastName } = formData;
                return (React.createElement("div", null,
                    React.createElement("div", { className: "form-row" },
                        React.createElement("label", null, "First Name:"),
                        React.createElement("input", { value: firstName, name: "firstName", onChange: changeForm })),
                    React.createElement("div", { className: "form-row" },
                        React.createElement("label", null, "Last Name:"),
                        React.createElement("input", { value: lastName, name: "lastName", onChange: changeForm })),
                    React.createElement("div", { className: "form-row" },
                        React.createElement("button", { disabled: !changed || submitting }, submitting ? 'Saving ...' : 'Save'),
                        ' ',
                        !submitting && (React.createElement(React.Fragment, null,
                            '| ',
                            React.createElement("button", { disabled: !changed, type: "button", onClick: reset }, "Reset")))),
                    error && (React.createElement("div", { className: "form-row" },
                        React.createElement("div", { className: "notification error" },
                            React.createElement("div", { className: "notification-content" },
                                React.createElement("div", { className: "notification-message" }, error.message)))))));
            }
        }
        const withSimpleForm = piral.createForm({
            message: `Really lose the data?`,
            emptyData: {
                firstName: '',
                lastName: '',
            },
            onSubmit(data) {
                console.log('Submitting simple data ...', data);
                return new Promise(resolve => setTimeout(() => {
                    resolve();
                    console.log('Submitted simple data!', data);
                }, 5000));
            },
        });
        piral.registerPage('/form-simple-example', withSimpleForm(MyForm));
        const withAsyncForm = piral.createForm({
            message: `Really lose the data?`,
            emptyData: {
                firstName: '',
                lastName: '',
            },
            onSubmit(data) {
                console.log('Submitting async data ...', data);
                return new Promise(resolve => setTimeout(() => {
                    resolve();
                    console.log('Submitted async data!', data);
                }, 5000));
            },
            loadData(props) {
                return new Promise(resolve => setTimeout(() => resolve({
                    firstName: 'My',
                    lastName: 'User_' + props.match.params.id,
                }), 5000));
            },
        });
        piral.registerPage('/form-async-example/:id', withAsyncForm(MyForm));
        const withFailingForm = piral.createForm({
            message: `Really lose the data?`,
            emptyData: {
                firstName: '',
                lastName: '',
            },
            onSubmit(data) {
                console.log('Submitting failing data ...', data);
                return new Promise((_, reject) => setTimeout(() => reject(new Error('The form failed!')), 3000));
            },
        });
        piral.registerPage('/form-failing-example', withFailingForm(MyForm));
    },
};
