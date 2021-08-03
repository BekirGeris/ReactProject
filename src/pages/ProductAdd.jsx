import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { Button, FormField, Label } from 'semantic-ui-react'
import BGRSTextInput from '../utilities/customFormControls/BGRSTextInput'

export default function productAdd() {

    const initialValues = {
        productName: "",
        unitPrice: ""
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
                    <BGRSTextInput name="productName" placeholder="Ürün Adı"/>
                    <BGRSTextInput name="unitPrice" placeholder="Ürün Adı"/>
                    <Button color="yellow" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
