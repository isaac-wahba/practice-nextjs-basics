import { notFound } from "next/navigation";

function ReviewDetails({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for {params.productId}{" "}
    </h1>
  );
}

export default ReviewDetails;