import type { FormProps } from 'antd'
import { Button, Card, Checkbox, Form, Input } from 'antd'
import { useTranslation } from 'react-i18next'

import { passwordPattern } from '@/shared/verify'

export default function LoginView() {
  type FieldType = {
    username?: string
    password?: string
    remember?: string
  }

  const onFinish: FormProps<FieldType>['onFinish'] = () => {}

  const { t } = useTranslation(['auth', 'verify'])

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 to-green-500">
      <Card title={t('auth:login.title')} style={{ minWidth: 350 }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label={t('auth:login.username')}
            name="username"
            rules={[{ required: true, message: t('verify:name.required') }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label={t('auth:login.password')}
            name="password"
            help={t('verify:password.help')}
            rules={[
              { required: true, message: t('verify:password.required') },
              { pattern: passwordPattern, message: t('verify:password.pattern') }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
            <Checkbox>{t('auth:login.remember')}</Checkbox>
          </Form.Item>
          <div className="flex justify-around">
            <Button type="primary" htmlType="submit">
              {t('auth:login.submit')}
            </Button>
            <Button>{t('auth:login.forget')}</Button>
          </div>
        </Form>
      </Card>
    </div>
  )
}
