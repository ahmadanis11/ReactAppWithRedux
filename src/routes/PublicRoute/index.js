import PropTypes from "prop-types";

export const PublicRoute = ({ component: Component, layout: Layout }) => {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}
PublicRoute.propTypes = {
  layout:PropTypes.any,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
};