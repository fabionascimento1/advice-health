import { Link } from "react-router-dom";

export interface Props {
  title: string;
  link: string;
  quantity: number;
  porcentagem: number;
  porcentagemDescription: string;
}

export function ResumeBox({
  title,
  link,
  quantity,
  porcentagem,
  porcentagemDescription,
}: Props) {
  return (
    <div className="border rounded col p-3">
      <div className="row">
        <div className="col">
          <Link to={link}>
            <span className="link-success fs-4 fw-medium">{title}:</span>
          </Link>
        </div>
        <div className="col-3 text-center">
          <h2>{quantity}</h2>
        </div>
      </div>

      <div className="row align-items-center mt-5">
        <div className="col ">
          {porcentagem > 0 ? (
            <img
              src="src/assets/chart_positive.svg"
              alt="arrow-up"
              width={150}
            />
          ) : (
            <img
              src="src/assets/chart_negative.svg"
              alt="arrow-up"
              width={150}
            />
          )}
        </div>
        <div className="col-3 text-center">
          <h4>{porcentagem}%</h4>
          <div className="text-muted">{porcentagemDescription}</div>
        </div>
      </div>
    </div>
  );
}
