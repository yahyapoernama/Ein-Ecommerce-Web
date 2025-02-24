import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import RegisterForm from "../../components/auth/RegisterForm";

export default function Register() {
  return (
    <>
      <PageMeta
        title="Register - Ein Ecommerce"
        description="Ein Ecommerce"
      />
      <AuthLayout>
        <RegisterForm />
      </AuthLayout>
    </>
  );
}
