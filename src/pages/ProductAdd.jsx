import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from "yup"
import { Button, FormField } from 'semantic-ui-react'

export default function productAdd() {

    const initialValues = {
        productName: "",
        unitPrice: 10
    }

    const validationSchema = Yup.object({
        productName: Yup.string().required("Urün adı zorunlu"),
        unitPrice: Yup.number().required("Urün fiyatı zorunlu.")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit = {(values) => {
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <FormField>
                        <Field name="productName" placeholder="Ürün Adı"></Field>
                    </FormField>
                    <FormField>
                    <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
                    </FormField>
                    <Button colo9r="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
