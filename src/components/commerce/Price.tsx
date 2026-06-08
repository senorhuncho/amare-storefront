type PriceProps = {
  amount: number;
  className?: string;
  currencyCode: string;
};

export function Price({ amount, className, currencyCode }: Readonly<PriceProps>) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(amount);

  return <span className={className ? `${className} tabular-nums` : "tabular-nums"}>{formattedPrice}</span>;
}
