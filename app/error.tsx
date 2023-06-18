"use client";

export default function ErrorScreen({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <>{JSON.stringify(error)}</>;
}
